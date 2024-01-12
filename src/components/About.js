import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const About = ({setShowAddProduct}) => {
    useEffect(() => {
        setShowAddProduct(false);
      }, [setShowAddProduct]);

    return(
        <div className='about'>
            <h4>
                Things impossible, improbable, and technomagical
            </h4>
            <p>
                We gather curiosities, from thr four corners of this world and others, making the traces of their pottential existances available for a small fee. Beware: we do not sell the impossible, improbable, and technomagical, but rather their promise. We provide offer the perfect gift for that person who has everything: the thing that may never exist, but that elicits dreams. 
            </p>
            <p>Version 1.0</p>
        </div>
    )
}
export default About