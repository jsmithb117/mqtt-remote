import { ChangeEvent, useState } from 'react'
import {
  Button, Card, Chip, InputAdornment, Slider, Stack, TableBody, TableCell, TableRow,
  TextField
} from '@mui/material'

const DEFAULT_TARE = 25.7
interface Pup {
  name: string
  proportion: number
  containerId: number
}
const DEFAULT_PUPS: Pup[] = [
  { name: "Phoenix", proportion: 0.2, containerId: 1 },
  { name: "Bean", proportion: .4, containerId: 2 },
  { name: "Rex", proportion: .4, containerId: 2 },
]

function PupFood() {
  const [foodState, setFoodState] = useState({
    tare: DEFAULT_TARE,
    gross: DEFAULT_TARE,
    net: 0,
    pups: DEFAULT_PUPS,
    containers: Array.from(new Set(DEFAULT_PUPS.map(({ containerId }) => (containerId))))
      .map((id) => ({ id, amount: 0 }))
  })
  const [allowUpdate, setAllowUpdate] = useState(false)
  const { tare, gross, net, pups, containers } = foodState

  const totalProportions = pups.reduce((acc, pup) => acc + pup.proportion, 0)

  interface Container {
    id: number
    amount: number
  }
  interface UpdateContainers {
    (newNet: number, pups: Pup[]): Container[]
  }
  const updateContainers: UpdateContainers = (net, pups) => {
    const newContainers = containers.map((container) => {
      const newAmount = pups.reduce((acc, pup) => {
        if (pup.containerId === container.id) {
          return acc + (pup.proportion / totalProportions) * net
        }
        return acc
      }, 0)
      return { ...container, amount: newAmount }
    })
    return newContainers
  }
  const rounded = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100
  const handleGrossChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newGross = Number(event.target.value)
    const newNet = rounded(newGross - tare)
    setFoodState((prevState) => ({
      ...prevState,
      gross: newGross,
      net: newNet,
      containers: updateContainers(newNet, prevState.pups)
    }))
  }
  const handleTareChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newTare = Number(event.target.value)
    const newNet = rounded(gross - newTare)
    setFoodState((prevState) => ({
      ...prevState,
      tare: newTare,
      net: newNet,
      containers: updateContainers(newNet, prevState.pups)
    }))
  }
  const handleAllowTareUpdate = () => setAllowUpdate(!allowUpdate)

  const handleProportion = (value: number | number[], name: string) => {
    const newProportion = Number(value)
    setFoodState((prevState) => {
      const newPups = prevState.pups.map((pup) => (
        pup.name === name ? { ...pup, proportion: newProportion } : pup)
      )
      return ({
        ...prevState,
        pups: newPups,
        containers: updateContainers(prevState.net, newPups)
      })
    })
  }
  return (
    <div style={{ margin: "25px" }} >
      <Card raised elevation={20}>
        <Stack sx={{ m: 1 }} spacing={2} >
          <Stack direction="row" spacing={2}>
            <TextField
              label="Tare Weight"
              id="outlined-start-adornment"
              value={tare}
              disabled={!allowUpdate}
              onChange={(e) => handleTareChange(e)}
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">oz</InputAdornment>,
              }}
            />
            <Button
              variant="contained"
              color={allowUpdate ? "error" : "primary"}
              onClick={handleAllowTareUpdate}>
              Allow Edit
            </Button>
          </Stack>
          <TextField
            label="Gross Weight"
            id="outlined-start-adornment"
            value={gross}
            onChange={(e) => handleGrossChange(e)}
            sx={{ m: 1, width: '25ch' }}
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">oz</InputAdornment>,
            }}
          />
          <Chip label={`Total: ${net}oz`} variant="outlined" />
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Pup
              </TableCell>
              <TableCell align="right">Proportion</TableCell>
              <TableCell align="right">Amount (oz)</TableCell>
            </TableRow>
            {pups.map((pup) => (
                <TableRow
                  key={pup.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pup.name}
                  </TableCell>
                  <TableCell align="right">
                    <Slider
                      disabled={!allowUpdate}
                      defaultValue={pup.proportion}
                      valueLabelDisplay="auto"
                      step={.01}
                      min={0}
                      max={1}
                      onChange={(_, value) => handleProportion(value, pup.name)}
                    />
                  </TableCell>
                  <TableCell align="right">{
                    rounded((pup.proportion / totalProportions) * net)
                  }</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Container
              </TableCell>
              <TableCell align="right">Total Amount (oz)</TableCell>
              <TableCell align="right">Daily Amount (oz)</TableCell>
            </TableRow>
            {containers.map(({ id, amount }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="right">{rounded(amount)}</TableCell>
                <TableCell align="right">{rounded(amount / 7)}</TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Stack>
      </Card>
    </div>

  )
}

export default PupFood
