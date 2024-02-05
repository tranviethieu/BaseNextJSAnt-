import { Calendar } from "iconsax-react";
import styles from "./InforProfile.module.scss";
import Image from "next/image"
function InforProfile() {
    return (<div className={styles.midMain}>
        <div className={styles.profile}>
            <Image
                className={styles.avatar}
                layout="fill"
                src={'https://htss.benhvien.tech/_next/image?url=https%3A%2F%2Fapi-booking.meapp.vn%2Fcore%2Fcommon%2Fpreview%2F65add1daec090cbffde2248f&w=640&q=75'}
             
                alt={'Image With Fallback'}
                
            />
            {/* <img className={styles.avatar} src="https://htss.benhvien.tech/_next/image?url=https%3A%2F%2Fapi-booking.meapp.vn%2Fcore%2Fcommon%2Fpreview%2F65add1daec090cbffde2248f&w=640&q=75" alt="avatar contacts"/> */}
            <h4>Tran Viet Hieu</h4>
            <a>0987654321</a>
            <div className={styles.dflex}><a>Năm sinh: 1983</a><a>Giới tính: Nữ</a></div>
          <div className={styles.cardAddress}>
            <div className={styles.address}>
                    <p>Địa chỉ:</p>
                    <p>Số 110</p>
                    <p>Đường Minh Khai</p>
                    <p>Phường Vĩnh Tuy</p>
                </div>
                <div className={styles.address}>
                    <p>Quận Hai Bà Trưng</p>
                    <p>Thành phố Hà Nội</p>
                </div>
          </div>
          <div className={styles.listCard}>
            <div className={styles.cardTab}>
                <div>
                    <Calendar size="20" color="#FF8A65"/>
                </div>
                <p>Hồ sơ</p>
            </div>
            <div className={styles.cardTab}>
                <div>
                    <Calendar size="20" color="#FF8A65"/>
                </div>
                <p>Lịch khám</p>
            </div>
            <div className={styles.cardTab}>
                <div>
                    <Calendar size="20" color="#FF8A65"/>
                </div>
                <p>Đơn thuốc</p>
            </div>
            <div className={styles.cardTab}>
                <div>
                    <Calendar size="20" color="#FF8A65"/>
                </div>
                <p>Trao đổi</p>
            </div>
            <div className={styles.cardTab}>
                <div>
                    <Calendar size="20" color="#FF8A65"/>
                </div>
                <p>Thông tin</p>
            </div>
          </div>
          <div className={styles.call}>
                   <div> <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
            <circle cx="36.5" cy="36.5" r="36.5" fill="#FE473D"/>
            <path d="M18.3715 43.9341L18.3764 43.9391C18.3764 43.9391 27.0232 43.9341 27.028 43.9335C27.7141 43.9337 28.2551 43.3778 28.2546 42.7023L28.2464 38.7118C28.2462 37.1634 29.9314 36.8523 33.4097 36.4987C35.711 36.2647 38.5594 36.1962 41.3911 36.4987C43.3781 36.7107 45.3175 37.0806 45.3173 38.7019C45.3173 38.7061 45.3122 42.6955 45.3146 42.6972L45.3173 42.7029C45.3173 43.4197 45.9011 43.9341 46.5561 43.9345L46.5611 43.9394C46.5611 43.9394 55.4573 43.9339 55.4624 43.9341C56.1484 43.9341 56.689 43.3781 56.689 42.7029V38.6912C56.4812 36.8306 53.3886 30.0649 37.4443 29.8677C20.6472 29.6595 17.1138 36.8306 17.1518 38.7114C17.1518 38.7114 17.1281 42.6953 17.13 42.6972L17.1323 42.7029C17.1325 43.4199 17.7165 43.9333 18.3715 43.9341Z" fill="white"/>
            </svg></div>
                <div> <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
<circle cx="36.5" cy="36.5" r="36.5" fill="#2ECF56"/>
<path d="M55.1494 48.155V48.1479C55.1494 48.1479 49.0318 42.0373 49.028 42.0343C48.543 41.549 47.7673 41.5595 47.2901 42.0375L44.4741 44.8651C43.3794 45.9601 41.9678 44.9884 39.2582 42.779C37.4655 41.3172 35.4029 39.3514 33.6145 37.1353C32.3594 35.5803 31.2496 33.9474 32.3961 32.8011C32.3991 32.7981 35.2237 29.9809 35.2231 29.9779L35.2253 29.972C35.7322 29.4651 35.683 28.6886 35.2202 28.2251V28.2181C35.2202 28.2181 28.9257 21.9315 28.9222 21.9277C28.4372 21.4427 27.6617 21.4535 27.1843 21.9309L24.3475 24.7676C23.1789 26.2303 20.5815 33.2011 31.7165 44.6149C43.4466 56.6394 51.0158 54.0672 52.3189 52.7104C52.3189 52.7104 55.1527 49.9102 55.1527 49.9075L55.1551 49.9018C55.662 49.3946 55.6121 48.6187 55.1494 48.155Z" fill="white"/>
</svg></div>
          </div>
        </div>
    </div>);
}

export default InforProfile;