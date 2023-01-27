const Categories = () => {
    return (
        <div>
            <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-primary dropdown-toggle">Nuestras Delicias</button></a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pasteles</a></li>
            <li><a class="dropdown-item" href="#">Roscas</a></li>
            <li><a class="dropdown-item" href="#">Especiales</a></li>
          </ul>
        </li>
        </div>
    );
}

export default Categories;