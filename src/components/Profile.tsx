import IconButton from './IconButton'
import { AuxiliaryText, BodyText, HeaderText, Link } from './Text'

export default function Profile() {
  return (
    <div className="flex flex-row justify-center flex-wrap items-center gap-12">
      <div className="flex flex-col flex-1">
        <AuxiliaryText>bleb1k.dev</AuxiliaryText>
        <HeaderText>Виктор Масников</HeaderText>
        <div className="flex flex-row mt-4 space-x-4 mb-2">
          <IconButton icon="telegram" url="https://t.me/BIebik" />
          <IconButton icon="github" url="https://github.com/Bleb1k" />
          <IconButton
            icon="email"
            url="mailto:viktor.masnikov17283940@gmail.com"
          />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="w-72 h72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr via-accent-via from-accent-start" />
        <div className="absolute inset-x-0 inset-y-4">
          <img src="/images/avatar.png" alt="avatar" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(207deg, rgba(0, 0, 0, 0) 40%, oklch(var(--b1)) 87%)',
          }}
        />
      </div>
    </div>
  )
}
