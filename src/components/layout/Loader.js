import loading from '../../img/loading.svg'
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader_container}>
        <img className={style.loader} src={loading} alt="loading"/>
    </div>
  )
}

export default Loader
