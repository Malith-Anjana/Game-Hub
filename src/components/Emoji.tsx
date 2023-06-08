import bullsEye from '../assets/bull-eye.png'
import thumbUp from '../assets/thumb-up.png'
import meh from '../assets/meh.png'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
    rating: number;
}
const Emoji = ({ rating}: Props) => {
    if(rating < 3) return null;

    const emojiMaps: { [key: number]: ImageProps} = {
        3: { src: meh, alt:'meh', boxSize: '25px'},
        4: { src: thumbUp, alt:'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt:'exceptional', boxSize: '35px' }
    }
  return (
    <Image {...emojiMaps[rating]} marginTop={1}/>
  )
}

export default Emoji