import Image from 'next/image'
import Link from 'next/link'
import styles from './ExampleCard.module.css'

type ExampleCardProps = {
  link: string
  originalLink?: string
  thumbnail: string
  title: string
  lessonNumber?: number
}

export function ExampleCard({ link, originalLink, thumbnail, title, lessonNumber }: ExampleCardProps) {
  return (
    <li className={styles['card']}>
      <Image width={300} height={300} src={thumbnail} alt="" />
      <div className={styles['card__content']}>
        <h3 className={styles['card__title']}>
          {title}
          {lessonNumber && <span>Lesson {lessonNumber}</span>}
        </h3>

        <Link href={link}>
          <a 
            className={styles['card__sandbox-link']}
            target="_blank"
            rel="noreferrer">
            Open sandbox
          </a>
        </Link>
        {originalLink && <Link href={originalLink}>
          <a 
            className={styles['card__sandbox-link']}
            target="_blank"
            rel="noreferrer">
            Open original example
          </a>
        </Link>}
        {lessonNumber && (
          <a
            href={`https://threejs-journey.com/lessons/${lessonNumber}`}
            className={styles['card__lesson-link']}
            target="_blank"
            rel="noreferrer">
            Open lesson {lessonNumber}
          </a>
        )}
      </div>
    </li>
  )
}
