import Navigation from "../components/Nav";
import styles from "./layouts.module.scss";
import bookLogo from '../source/bookLogo.svg';
import classNames from "classnames";

export default function Layouts(props: {children: JSX.Element}){

    return (
        <div className={classNames(styles.windowContainer)}>
            <Navigation
                indexNav={{imgSrc: <img src={bookLogo} alt="index" />, title: "阅马平台", path: "/"}}
                itemPath={[
                    { title: "活动详情", path: "/activities" }
                ]}
            ></Navigation>
            <div className={classNames(styles.showPageContainer)}>
                {props.children}
            </div>
        </div>
    )
}