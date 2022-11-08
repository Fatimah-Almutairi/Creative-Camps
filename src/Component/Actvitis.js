import { Image,Box } from '@chakra-ui/react'


import React from 'react'

function Actvitis() {
  return (
    <div className='container'>
    <div>
      <div className='IMG-1' >
<Box  >
  <Image src='IMG/img-1.png' />
</Box>
<p className="Text"> Cooking with kids can encourage an interest in food, healthy eating habits and skills for life.
Short and simple cooking activities are great for young children.
For older children, you can introduce more creative recipes and complex kitchen tasks.</p>
</div>
<div>
<Box className='IMG-2'>
  <Image src='IMG/img-2.JPG'  />

<p>
Who doesn’t love playing board games together as a family? It’s one of the best ways to teach your children life skills while having fun! It has been noticed that there are some parents who view playing board games as a traditional way to have fun while relaxing at home.
</p>
</Box>
</div>
<div>
<Box className='IMG-3'>
  <Image src='IMG/childrens-art-display-recycled-clip-frames-lollyjane.com_-600x505-1.JPG' />
  <p> Save the refrigerator doors for important notes and us these different colors of clothespin and clothesline to show off new art pieces and older art pieces. Colorful clothespins are perfect for stringing artwork along a wall.</p>
</Box>
</div>
<div>
<Box className='IMG-4'>
  <Image src='IMG/img-4.jpg' />

<p> Benefits of Drawing in Early Childhood
<h2>Imagination </h2>
Without limitations, kids access their vivid imaginations while drawing. Talk with them about their pictures, and they often want to tell you the “story” behind the drawing. 
<h2>Creativity</h2>
With various drawing/painting tools and papers or other surfaces available, preschoolers can creatively explore the process of art without concerns over a specific product as a result of their efforts. 
</p>
</Box>
</div>
    </div>
    </div>
  )
}

export default Actvitis