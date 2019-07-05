import React from 'react'
export const contexts = [
    {
      icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
      title: 'Themes', // an unique name of a contextual environment
      components: [
          ({ color, children }) => <div style={{background: color }}>{children}</div>
      ],
      params: [
        // an array of params contains a set of predefined `props` for `components`
        { name: 'Light Theme', props: {color: '#fff'} },
        { name: 'Dark Theme', props: {color: '#000'}, default: true },
      ],
      options: {
        deep: true, // pass the `props` deeply into all wrapping components
        disable: false, // disable this contextual environment completely
        cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
      },
    },
    /* ... */ // multiple contexts setups are supported
  ];