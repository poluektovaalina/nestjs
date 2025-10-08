"use client"
import styles from "./footer.module.css"
import { siteConfig } from "@/config/site.config"

export default function Footer() {
    
    return(
        <div className={styles.footer}>
            <p>{siteConfig.description} (c)2025</p>
        </div>
    )
}