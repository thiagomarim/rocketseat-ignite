import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={styles.cover}
        />
        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/137715251?v=4" />

          <strong>Thiago Marim</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={"20px"} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}
