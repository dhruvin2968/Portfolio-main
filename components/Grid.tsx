import { gridItems } from '../data/index'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about' className='scale-75 transform origin-top'>
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem
            id={id} 
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
