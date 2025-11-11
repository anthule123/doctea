import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <div>
        <h2>Page list: </h2>
        <ol>
          <li>
            <Link href='/basic'>Basic </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
