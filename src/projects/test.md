---
position: cover
layout:
company:
_inputs:
  company:
    type: multiselect
    options:
      values:
      - Scout
      - Scout MMC
      - S1 Construction
  position:
    type: choice
    options:
      values:
        - relative
        - background
        - cover
  layout:
    type: choice
    options:
      values:
        - title: left
          text: Links uitgelijnd
          icon: home
          image: 900x.jpg
        - title: center
          text: Gecentreerd
          icon: circle
          image: 900x.jpg
        - title: split
          text: Gesplitst
          icon: code
          image: 900x.jpg
        - title: stack
          text: Gestapeld
          icon: code
          image: 900x.jpg
        - title: reverse
          text: Gestapeld omgekeerd
          icon: code
          image: 900x.jpg
      value_key: title
      preview:
        icon:
          - key: icon
        text:
          - key: text
---
