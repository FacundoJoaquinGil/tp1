

const Main = ({alumno}) => {
  return (
    <>

    <main>
      
      <div className="card_main">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h1 className="card-title">{alumno.nombre} Gil</h1>
                <p className="card-text">Soy estudiante En la utn tengo {alumno.edad} mi numero de telefono es {alumno.numtel}</p>
                
                
              </div>
            </div>
      </div>

    </main>
</>
  )
}

export default Main