
import React from 'react';
import { addMessageCreater, updateOnChangeMessageCreator } from '../../../../Redux/profile_reducer';
import Preloader from '../../../common/Preloader';
import lookForJob from '../../../../accets/images/lookForJob.jpg';
import notLookForJob from '../../../../accets/images/notLookForJob.jpg';
import userPhoto from '../../../../accets/images/userPhoto.png';
import ProfileStatus from './profileStatus'
import samuraiGround from '../../../../accets/images/samuraiGround.png'

import s from "./FileInfo.module.css";
let localStatus = "Hi i'm user of Era socialNetwork";


const FileInfo = (props) => {
    let rightNowRef = React.createRef();

    let callBack = () => {

        props.callBack();


    }

    let onPostChange = () => {
        let text = rightNowRef.current.value;

        props.updateOnChange(text);
    }

    if (!props.profile) {
        return <Preloader />
    }
    return (

        <div className={s.content}>

            <div className={s.fileInfoEl} ><img src={samuraiGround} /> </div>
            <div className={s.desc}>
                <div className={s.fileInfoEl}>
                    <textarea onChange={onPostChange} ref={rightNowRef} value={props.textBody}></textarea>
                    <button onClick={callBack}>add post</button>
                </div>

                <div className={s.fileInfoElProfile}>
                    <img src={props.profile.photos.large?props.profile.photos.large:userPhoto} />
                    <div className={s.profileInformation}>
                        <div className={s.profileInformationElement}>
                            <span>Name : </span>{props.profile.fullName}
                        </div>
                        <div className={s.profileInformationElement}>
                            <ProfileStatus status = {props.status} putStatusContent = {props.putStatusContent} />
                        </div>
                        
                        <div className={s.profileInformationElement}>
                            <span>Поиск работы :   </span>{props.profile.lookingForAJobDescription}
                        </div>
                        <div className={s.profileInformationElement}>
                            <span>Обо мне  : </span>{props.profile.aboutMe}
                        </div>

                        <div className={s.profileInformationElement}>
                            <div className={s.profileInformationElementImg}><img  src = {props.profile.lookingForAJob?lookForJob : notLookForJob}/></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default FileInfo;