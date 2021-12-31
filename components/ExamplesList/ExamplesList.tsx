import React from 'react'
import { ExampleCard } from '../ExampleCard/ExampleCard'
import styles from './ExampleList.module.css'

type ExamplesRowProps = {
  title: string
}

function ExamplesRow({ title, children }: React.PropsWithChildren<ExamplesRowProps>) {
  return (
    <div className={styles['example-row']}>
      <h2 className={styles['example-row__title']}>{title}</h2>
      <ul className={styles['example-row__list']}>{children}</ul>
    </div>
  )
}

export function ExamplesList() {
  return (
    <div className={styles.container}>
      <ExamplesRow title="Basics">
        <ExampleCard
          link="/basics/textures"
          thumbnail="/thumbnails/basics/textures.png"
          title="Textures"
          lessonNumber={11}
        />
        <ExampleCard
          link="/basics/materials"
          thumbnail="/thumbnails/basics/materials.png"
          title="Materials"
          lessonNumber={12}
        />
        <ExampleCard
          link="/basics/text3d"
          thumbnail="/thumbnails/basics/text3d.png"
          title="3D Text"
          lessonNumber={13}
        />
      </ExamplesRow>
      <ExamplesRow title="Classic Techniques">
        <ExampleCard
          link="/classic-techniques/lights"
          thumbnail="/thumbnails/classic-techniques/lights.png"
          title="Lights"
          lessonNumber={15}
        />
        <ExampleCard
          link="/classic-techniques/haunted-house"
          thumbnail="/thumbnails/classic-techniques/haunted-house.png"
          title="Haunted House"
          lessonNumber={17}
        />
        <ExampleCard
          link="/classic-techniques/particles"
          thumbnail="/thumbnails/classic-techniques/particles.png"
          title="Particles"
          lessonNumber={18}
        />
        <ExampleCard
          link="/classic-techniques/particles-animated"
          thumbnail="/thumbnails/classic-techniques/particles-animated.png"
          title="Particles Animated"
          lessonNumber={18}
        />
        <ExampleCard
          link="/classic-techniques/galaxy-generator"
          thumbnail="/thumbnails/classic-techniques/galaxy-generator.png"
          title="Galaxy Generator"
          lessonNumber={19}
        />
        <ExampleCard
          link="/classic-techniques/raycaster"
          thumbnail="/thumbnails/classic-techniques/raycaster.png"
          title="Raycaster"
          lessonNumber={20}
        />
        <ExampleCard
          link="/classic-techniques/scroll-based-animation"
          thumbnail="/thumbnails/classic-techniques/scroll-based-animation.png"
          title="Scroll Based Animation"
          lessonNumber={21}
        />
      </ExamplesRow>
      <ExamplesRow title="Advanced Techniques">
        <ExampleCard
          link="/advanced-techniques/physics"
          thumbnail="/thumbnails/advanced-techniques/physics.png"
          title="Physics"
          lessonNumber={22}
        />
      </ExamplesRow>
      <ExamplesRow title="Shaders">
        <ExampleCard
          link="/shaders/shader-patterns"
          thumbnail="/thumbnails/shaders/shader-patterns.png"
          title="Shader Patterns"
          lessonNumber={28}
        />
        <ExampleCard
          link="/shaders/raging-sea"
          thumbnail="/thumbnails/shaders/raging-sea.png"
          title="Raging Sea"
          lessonNumber={29}
        />
        <ExampleCard
          link="/shaders/animated-galaxy"
          thumbnail="/thumbnails/shaders/animated-galaxy.png"
          title="Animated Galaxy"
          lessonNumber={30}
        />
      </ExamplesRow>
      <ExamplesRow title="Extra">
        <ExampleCard link="/extra/portal" thumbnail="/thumbnails/extra/portal.png" title="Portal" lessonNumber={39} />
      </ExamplesRow>
      <ExamplesRow title="Levels">
        <ExampleCard link="/levels/1" thumbnail="/thumbnails/levels/level1.png" title="Level 1" />
      </ExamplesRow>
    </div>
  )
}
