(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[10],{724:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return c}));var r=o(1),n=o(0),i=(o(2),o(691)),s=o(150),a=o(4),l=[{name:"subtitle",type:"string",default:"",description:"Job subtitle of the card"},{name:"title",type:"string",default:"",description:"Job title of the card"},{name:"showArrow",type:"bool",default:"false",description:"Should show arrow or not"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"titleProps",type:"object",default:"",description:"Additional props to pass to the title Typography component"},{name:"className",type:"string",default:"",description:"External classes"}],c=function(t){var e=Object.assign({},t);return Object(n.jsxs)("div",Object(r.a)(Object(r.a)({},e),{},{children:[Object(n.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(n.jsx)(s.b,{title:"CardJobMinimal",path:"src/components/organisms/CardJobMinimal/CardJobMinimal.js",description:"Component to display the job minimal card"})}),Object(n.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(n.jsx)(s.a,{code:"\nimport { CardJobMinimal } from 'components/organisms';\n// or\nimport CardJobMinimal from 'components/organisms/CardJobMinimal';\n"})}),Object(n.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(n.jsx)(s.d,{dataProperties:l})}),Object(n.jsx)(s.e,{title:"Basic Example",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(a.g,{title:"Front-end developer",subtitle:"Paris / Full time"})}),Object(n.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { CardJobMinimal } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardJobMinimal\n        title={'Front-end developer'}\n        subtitle={'Paris / Full time'}\n      />\n    </Box>\n  );\n}\n"})]})}),Object(n.jsx)(s.e,{title:"Outlined",gutterBottom:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(n.jsx)(a.g,{title:"Front-end developer",subtitle:"Paris / Full time",showArrow:!0,titleProps:{variant:"h6"},subtitleProps:{variant:"subtitle1"}})}),Object(n.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { CardJobMinimal } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardJobMinimal\n        title={'Front-end developer'}\n        subtitle={'Paris / Full time'}\n        showArrow\n        titleProps={{\n            variant: 'h6',\n        }}\n        subtitleProps={{\n            variant: 'subtitle1',\n        }}\n      />\n    </Box>\n  );\n}\n"})]})})]}))}}}]);