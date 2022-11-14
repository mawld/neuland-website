import Link from 'next/link'
import styles from '../styles/ProductPreview.module.css'

export default function ProductPreview({ product }) {
  return (
    <Link key={product.key} href={"/product/" + product.id}>
      <a>
        <div className={styles.product}>
          <p className={styles.title}>
            {product.name}
          </p>
          <p className={styles.price}>
            {product.price.toFixed(2)} €
            </p>
          <p className={styles.rating}>
            {'⭐'.repeat(product.rating)}
          </p>
        </div>
      </a>
    </Link>
  )
}
