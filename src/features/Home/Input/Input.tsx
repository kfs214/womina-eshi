import TextField from '@mui/material/TextField'

type Props = React.ComponentProps<typeof TextField>

export function Input(props: Props) {
  return (
    <TextField label="text" variant="outlined" fullWidth required {...props} />
  )
}
