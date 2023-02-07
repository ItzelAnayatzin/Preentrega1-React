const Categories = () => {
    return (
        <div>
            <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn dropdown-toggle">Menú</button></a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Snacks</a></li>
            <li><a class="dropdown-item" href="#">Bebidas</a></li>
            <li><a class="dropdown-item" href="#">Productos Coreanos</a></li>
          </ul>
        </li>
        </div>
    );
}

export default Categories;