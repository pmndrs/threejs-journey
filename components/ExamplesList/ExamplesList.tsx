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
          originalLink="/original/basics/textures"
          thumbnail="/thumbnails/basics/textures.png"
          title="Textures"
          lessonNumber={11}
        />
        <ExampleCard
          link="/basics/materials"
          originalLink="/original/basics/materials"
          thumbnail="/thumbnails/basics/materials.png"
          title="Materials"
          lessonNumber={12}
        />
        <ExampleCard
          link="/basics/text3d"
          originalLink="/original/basics/text3d"
          thumbnail="/thumbnails/basics/text3d.png"
          title="3D Text"
          lessonNumber={13}
        />
      </ExamplesRow>
      <ExamplesRow title="Classic Techniques">
        <ExampleCard
          link="/classic-techniques/lights"
          originalLink="/original/classic-techniques/lights"
          thumbnail="/thumbnails/classic-techniques/lights.png"
          title="Lights"
          lessonNumber={15}
        />
        <ExampleCard
          link="/classic-techniques/haunted-house"
          originalLink="/original/classic-techniques/haunted-house"
          thumbnail="/thumbnails/classic-techniques/haunted-house.png"
          title="Haunted House"
          lessonNumber={17}
        />
        <ExampleCard
          link="/classic-techniques/particles"
          originalLink="/original/classic-techniques/particles"
          thumbnail="/thumbnails/classic-techniques/particles.png"
          title="Particles"
          lessonNumber={18}
        />
        <ExampleCard
          link="/classic-techniques/particles-animated"
          originalLink="/original/classic-techniques/particles"
          thumbnail="/thumbnails/classic-techniques/particles-animated.png"
          title="Particles Animated"
          lessonNumber={18}
        />
        <ExampleCard
          link="/classic-techniques/galaxy-generator"
          originalLink="/original/classic-techniques/galaxy-generator"
          thumbnail="/thumbnails/classic-techniques/galaxy-generator.png"
          title="Galaxy Generator"
          lessonNumber={19}
        />
        <ExampleCard
          link="/classic-techniques/raycaster"
          originalLink="/original/classic-techniques/raycaster"
          thumbnail="/thumbnails/classic-techniques/raycaster.png"
          title="Raycaster"
          lessonNumber={20}
        />
        <ExampleCard
          link="/classic-techniques/scroll-based-animation"
          originalLink="/original/classic-techniques/scroll-based-animation"
          thumbnail="/thumbnails/classic-techniques/scroll-based-animation.png"
          title="Scroll Based Animation"
          lessonNumber={21}
        />
      </ExamplesRow>
      <ExamplesRow title="Advanced Techniques">
        <ExampleCard
          link="/advanced-techniques/physics"
          originalLink="/original/advanced-techniques/physics"
          thumbnail="/thumbnails/advanced-techniques/physics.png"
          title="Physics"
          lessonNumber={22}
        />
      </ExamplesRow>
      <ExamplesRow title="Shaders">
        <ExampleCard
          link="/shaders/shader-patterns"
          originalLink="/original/shaders/shader-patterns"
          thumbnail="/thumbnails/shaders/shader-patterns.png"
          title="Shader Patterns"
          lessonNumber={28}
        />
        <ExampleCard
          link="/shaders/raging-sea"
          originalLink="/original/shaders/raging-sea"
          thumbnail="/thumbnails/shaders/raging-sea.png"
          title="Raging Sea"
          lessonNumber={29}
        />
        <ExampleCard
          link="/shaders/animated-galaxy"
          originalLink="/original/shaders/animated-galaxy"
          thumbnail="/thumbnails/shaders/animated-galaxy.png"
          title="Animated Galaxy"
          lessonNumber={30}
        />
        <ExampleCard
          link="/shaders/modified-material"
          originalLink="/original/shaders/modified-material"
          thumbnail="/thumbnails/shaders/modified-material.png"
          title="Modified Material"
          lessonNumber={31}
        />
      </ExamplesRow>
      <ExamplesRow title="Extra">
        <ExampleCard link="/extra/post-processing" originalLink="/original/extra/post-processing" thumbnail="/thumbnails/extra/post-processing.png" title="Post Processing" lessonNumber={32} />
        <ExampleCard link="/extra/loading" originalLink="/original/extra/loading" thumbnail="/thumbnails/extra/loading.png" title="Loading" lessonNumber={34} />
        <ExampleCard link="/extra/mixing-html-and-webgl" originalLink="/original/extra/mixing-html-and-webgl" thumbnail="/thumbnails/extra/mixing-html-and-webgl.png" title="Mixing Html and Webgl" lessonNumber={35} />
        <ExampleCard link="/extra/portal" originalLink="/original/extra/portal" thumbnail="/thumbnails/extra/portal.png" title="Portal" lessonNumber={39} />
      </ExamplesRow>
      <ExamplesRow title="Levels">
        <ExampleCard link="/levels/1" thumbnail="/thumbnails/levels/level1.png" title="Level 1" />
      </ExamplesRow>
    </div>
  )
}
