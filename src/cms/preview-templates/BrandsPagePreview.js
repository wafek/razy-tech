/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const descTitle = entry.getIn(['data', 'page_description', 'title'])
  const descText = entry.getIn(['data', 'page_description', 'text'])
  const pageDesc = {title: descTitle, text: descText}

  const locations = entry.getIn(['data', 'locations', 'places'])
  const places = locations ? locations.toJS() : []
  const locationObj = entry.getIn(['data', 'locations']).toJS()
  locationObj['places'] = places

  console.log(entry.getIn(['data', 'expansion']).toJS())
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      pageDescription={pageDesc}
      image={entry.getIn(['data', 'hero_image'])}
      bussinessStructure={entry.getIn(['data', 'bussiness_structure']).toJS()}
      expansion={entry.getIn(['data', 'expansion']).toJS()}
      locations={locationObj}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
