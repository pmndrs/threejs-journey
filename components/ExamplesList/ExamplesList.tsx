import Link from 'next/link'
import Image from 'next/image'
import styles from './ExampleList.module.css'
import React from 'react'

type ExampleCardProps = {
  link: string;
  thumbnail: string;
  title: string;
}

function ExampleCard({link, thumbnail, title}: ExampleCardProps) {
  return (
    <li className={styles['example-card']}>
      <Link href={link}>
        <a>
          <Image width={250} height={250} src={thumbnail} alt="" />
          <h3>{title}</h3>
        </a>
      </Link>
    </li>
  )
}

type ExamplesRowProps = {
  title: string;
}

function ExamplesRow({ title, children }: React.PropsWithChildren<ExamplesRowProps>) {
  return (
    <div>
      <h2 className={styles['example-row__title']}>
        {title}
      </h2>
      <ul className={styles['example-row__list']}>
        {children}
      </ul>
    </div>
  )
}

const ExamplesList = () => {
  return (
    <div className={styles.container}>
      <ExamplesRow title='Basics'>
        <ExampleCard link="/basics/textures" thumbnail="/thumbnails/basics/textures.png" title="Textures" />
        <ExampleCard link="/basics/materials" thumbnail="/thumbnails/basics/materials.png" title="Materials" />
        <ExampleCard link="/basics/text3d" thumbnail="/thumbnails/basics/text3d.png" title="3D Text" />
      </ExamplesRow>
      <ExamplesRow title='Classic Techniques'>
        <ExampleCard link="/classic-techniques/lights" thumbnail="/thumbnails/classic-techniques/lights.png" title="Lights" />
        <ExampleCard link="/classic-techniques/haunted-house" thumbnail="/thumbnails/classic-techniques/haunted-house.png" title="Haunted House" />
        <ExampleCard link="/classic-techniques/particles" thumbnail="/thumbnails/classic-techniques/particles.png" title="Particles" />
        <ExampleCard link="/classic-techniques/particles-animated" thumbnail="/thumbnails/classic-techniques/particles-animated.png" title="Particles Animated" />
        <ExampleCard link="/classic-techniques/galaxy-generator" thumbnail="/thumbnails/classic-techniques/galaxy-generator.png" title="Galaxy Generator" />
        <ExampleCard link="/classic-techniques/raycaster" thumbnail="/thumbnails/classic-techniques/raycaster.png" title="Raycaster" />
        <ExampleCard link="/classic-techniques/scroll-based-animation" thumbnail="/thumbnails/classic-techniques/scroll-based-animation.png" title="Scroll Based Animation" />
      </ExamplesRow>
      <ExamplesRow title='Advanced Techniques'>
        <ExampleCard link="/advanced-techniques/physics" thumbnail="/thumbnails/advanced-techniques/physics.png" title="Physics" />
      </ExamplesRow>
      <ExamplesRow title='Shaders'>
        <ExampleCard link="/shaders/shader-patterns" thumbnail="/thumbnails/shaders/shader-patterns.png" title="Shader Patterns" />
        <ExampleCard link="/shaders/raging-sea" thumbnail="/thumbnails/shaders/raging-sea.png" title="Raging Sea" />
      </ExamplesRow>
      <ExamplesRow title='Extra'>
        <ExampleCard link="/extra/portal" thumbnail="/thumbnails/extra/portal.png" title="Portal" />
      </ExamplesRow>
      <ExamplesRow title='Levels'>
        <ExampleCard link="/levels/1" thumbnail="/thumbnails/levels/level1.png" title="Level 1" />
      </ExamplesRow>
    </div>
  )
}

export { ExamplesList }