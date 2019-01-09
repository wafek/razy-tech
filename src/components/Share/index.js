import React, {Component} from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  WhatsappShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share'
import config from '../../../meta/config'
import './styles.sass'

class Share extends Component {
  render () {
    const {title, slug, excerpt, mobile} = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <div className='social-links' >
        <FacebookShareButton style={{cursor:'pointer'}} url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          {/* <FacebookShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </FacebookShareCount> */}
        </FacebookShareButton>
        <TwitterShareButton style={{cursor:'pointer'}} url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
          style={{cursor:'pointer'}}
        >
          <LinkedinIcon  round size={iconSize} />
          {/* <LinkedinShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </LinkedinShareCount> */}
        </LinkedinShareButton>
        <TelegramShareButton style={{cursor:'pointer'}} url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
        <WhatsappShareButton style={{cursor:'pointer'}} url={url}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>
      </div>
    )
  }
}

export default Share
