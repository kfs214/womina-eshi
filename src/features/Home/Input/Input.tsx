import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

type TextFieldProps = React.ComponentProps<typeof TextField>
type Props = {
  contentProps: TextFieldProps
  primaryColorProps: TextFieldProps
  secondaryColorProps: TextFieldProps
}

function ColorInput(props: TextFieldProps) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: <InputAdornment position="start">#</InputAdornment>,
      }}
      {...props}
    />
  )
}

export function Input({
  contentProps,
  primaryColorProps,
  secondaryColorProps,
}: Props) {
  return (
    <Box display="grid" gap={1}>
      <TextField
        label="text"
        variant="outlined"
        fullWidth
        required
        {...contentProps}
      />
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>
        {/* TODO バリデーション */}
        <Box>
          <ColorInput label="Primary Color" {...primaryColorProps} />
        </Box>
        <Box>
          <ColorInput label="Secondary Color" {...secondaryColorProps} />
        </Box>
      </Box>
    </Box>
  )
}
