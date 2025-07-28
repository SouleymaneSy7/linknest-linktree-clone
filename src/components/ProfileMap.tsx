import * as React from 'react'

import MapWithNoSSR from '@/components/Map/MapWithNoSSR'
import Title from './Title'
import Container from './Container'
import { MapPinIcon } from 'lucide-react'

const ProfileMap: React.FC = () => {
  return (
    <Container
      as={'section'}
      className="bg-secondary mt-8 rounded-sm px-4 py-5 lg:px-6 lg:py-5"
    >
      <Title
        level="h2"
        className="font-space-grotesk text-foreground flex gap-2 font-medium"
      >
        <MapPinIcon />
        Address
      </Title>

      <div className="my-3 h-[213px] w-full overflow-hidden rounded-sm lg:h-60">
        <MapWithNoSSR />
      </div>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <Title
            level="h3"
            className="font-space-grotesk text-foreground font-bold"
          >
            Friguiady
          </Title>
          <p>Maneah, Coyah</p>
        </div>

        <div>
          <p className="font-space-grotesk text-muted-foreground font-medium">
            Guinea - Conakry
          </p>
        </div>
      </div>
    </Container>
  )
}

export default ProfileMap
