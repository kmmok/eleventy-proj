---
title: Oaties
call_to_action: Blog
large_header: false
show_in_navigation: true
navigation_order: 2
gallery:
  - image: ''
    caption:

seo:
  page_title: About
  description: All about us!
  social_image: ''
_inputs:
  seo:
    type: object
    options:
      preview:
        text:
          - key: page_title
        subtext: 'hello'
        image:
          - key: social_image
        icon: travel_explore
        

page_blocks:
  - template: text-block
    include_left-hand_column_text_: true
    lefthand_text:
      text: Confidence, Compensation, Competition
      header_type: Medium Header
      download: ''
      link_url: ''
      link_text: ''
    section_break: false
    text_block: ''
  - template: portrait-gallery-block-small
    section_break: false
    include_left-hand_column_text_: false
    lefthand_text:
      header_type: ''
      text: ''
      download: ''
      link_url: ''
      link_text: ''
    text_block: OK this should show
_inputs:
  page_blocks:
    options:
      text:
        - key: template
      preview:
        subtext:
          - key: text_block
          - Fallback text
  lefthand_text:
    options:
      preview:
        text:
          - key: header_type
        subtext:
          - key: text
---
Nothing is green or [blue](/services/).