type Props = {
  content: string
  primaryColor: string
  secondaryColor: string
}

export function DynamicFunchan({
  content,
  primaryColor,
  secondaryColor,
}: Props) {
  return (
    <div>
      {content}, {primaryColor}, {secondaryColor}
    </div>
  )
}
