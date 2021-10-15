import React, {useRef} from 'react'
import defaultAva from './../../../../../img/defaultAva.png'
import Loader from "../../../../../UI/Loader/Loader";
import s from './profileInfo.module.css';
import facebook from './../../../../../img/icons/social-links/facebook-16.png';
import website from './../../../../../img/icons/social-links/website-16.png';
import vk from './../../../../../img/icons/social-links/vk-16.png';
import twitter from './../../../../../img/icons/social-links/twitter-16.png';
import instagram from './../../../../../img/icons/social-links/instagram-16.png';
import youtube from './../../../../../img/icons/social-links/youtube-16.png';
import github from './../../../../../img/icons/social-links/github-16.png';
import cameraIcon from './../../../../../img/icons/camera-32.png'

const ProfileInfo = (props) => {
    const userAvatar = props.profile?.photos?.large || defaultAva

    const socialLinks = [
        {alt:'facebook', img:facebook, link:props.profile?.contacts?.facebook},
        {alt:'website', img:website, link:props.profile?.contacts?.website},
        {alt:'vk', img:vk, link:props.profile?.contacts?.vk},
        {alt:'twitter', img:twitter, link:props.profile?.contacts?.twitter},
        {alt:'instagram', img:instagram, link:props.profile?.contacts?.instagram},
        {alt:'youtube', img:youtube, link:props.profile?.contacts?.youtube},
        {alt:'github', img:github, link:props.profile?.contacts?.github},
    ]


    if (!props.profile) {
        return <Loader/>
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputUpload = useRef(null)

    const onPhotoUploadHandler = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0], props.userId)
        }
    }

    return <div className={s.profileCard}>
        {props.userId === props.authorizedUserId
            ? <div className={s.profilePhotoBlock}>
                <div className={s.uploadPhoto} onClick={()=>inputUpload.current?.click()}><img src={cameraIcon} alt=""/></div>
                <div className='uploadForm'>
                    <div className={s.uploadPhotoForm}>
                        <form method="post" action="" encType="multipart/data" id='inputAva'>
                            <label htmlFor="avatar_upload">
                                <input name="avatar_upload" type="file"
                                       ref={inputUpload}
                                       onChange={onPhotoUploadHandler}/>
                            </label>
                        </form>
                    </div>
                </div>
                <div className={s.profileImg}><img src={userAvatar} alt="user avatar"/>
                </div></div>
            : <div className={s.profileImg}><img src={userAvatar} alt="user avatar"/></div>
        }



        <div className={s.profileInfo}>
            <p><span className={s.info}>ID: </span><span className={s.value}>{props.profile?.userId || 'test ID'}</span></p>
            <p><span className={s.info}>Looking for a job: </span><span className={s.value}>{props.profile?.lookingForAJob ? 'Yes' : 'No'}</span></p>
        </div>
        <div className={s.profileLinks}>
            {socialLinks.map(socialLink => <div className={s.link} key={socialLink.alt}>
                <div className="link-img">
                    <img src={socialLink.img} alt={socialLink.alt}/>
                </div>
                <div className={s.linkItem}>
                    {socialLink.link
                        ? <span className={s.link}>
                            <a target="_blank" href={socialLink.link} rel="noreferrer">Show link</a></span>
                        : <span>No info</span>
                    }
                </div>
            </div>)}
        </div>
    </div>

}

export default ProfileInfo;



