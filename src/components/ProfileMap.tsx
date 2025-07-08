import * as React from 'react'

import MapWithNoSSR from '@/components/Map/MapWithNoSSR'
import Title from './Title'
import Container from './Container'
import { MapPinIcon } from 'lucide-react'

const ProfileMap: React.FC = () => {
  return (
    <Container
      as={'section'}
      className="rounded-md bg-secondary py-5 px-4 mb-4 lg:py-5 lg:px-6"
    >
      <Title
        level="h2"
        className="font-space-grotesk font-fw-bold text-fs-lg text-card-foreground flex gap-3"
      >
        <MapPinIcon />
        Addresse
      </Title>

      <div className="w-full h-[213px] rounded-md my-3 overflow-hidden lg:h-60">
        <MapWithNoSSR />
      </div>

      <div className="flex items-start justify-between">
        <div>
          <Title
            level="h3"
            className="text-fs-lg font-space-grotesk font-fw-bold text-card-foreground"
          >
            Friguiady
          </Title>
          <p>Maneah, Coyah</p>
        </div>

        <div>
          <p className="text-muted-foreground text-fs-lg">Guinée - Conakry</p>
        </div>
      </div>
    </Container>
  )
}

export default ProfileMap
