import { addDecorator, addParameters, load } from "@storybook/react";
import { withContexts } from '@storybook/addon-contexts/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { contexts } from './contexts'; 

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS }})

addDecorator(withContexts(contexts));

// Contents of your existing configuration minus calls to the old-style `configure`

// wherever your story files are located
load(require.context('../stories', true, /\.stories\.js$/), module);