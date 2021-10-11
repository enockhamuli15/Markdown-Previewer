import React from "react";
import Toolbar from "./Toolbar";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


class Previewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
    this.refresh = this.refresh.bind(this)
  }
  
  handleChange(e) {
    this.setState(state =>({
      content: e.target.value
    }));
  }
  refresh(){
    this.setState(state =>({
      content: placeholder
    }));
  }
  componentWillMount(){
    this.refresh()
  }
  render(){
    return (
    <div>
        <h4 id='title' className='text-center'>Markdown previewer </h4>
        <div className='row' style={{margin: '5% 0 0 0'}}>
          <div className='col-md-4'>
         <Toolbar
            name="Editor"
            class="fa fa-text-width"
            margin= '3% 0 0 10%'
            wid= '80%'
           btn = {<button id='btn' className='btn btn-success' onClick={this.refresh} >Refresh</button>}
           
          />
        <textarea id='editor' onChange={this.handleChange} value={this.state.content} rows={10} style={{height: '40%'}}/>
          </div>
          <div className='col-md-8'>
                 <Toolbar
            name="Preview"
            class="fa fa-file-text"
            margin= '3% 0 0 5%'
            
          />
        <div id='previewer'>
          <ReactMarkdown children={this.state.content} remarkPlugins={[remarkGfm]} /> </div>
            </div>
          </div>
        <div class="footer text-center">
        by <a href="https://www.linkedin.cn/in/enock-hamuli-156a251a3/">enockham</a>
        </div>
    </div>
    )
  }
}

const placeholder = `# React Markdown Previewer App!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.linkedin.cn/in/enock-hamuli-156a251a3/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded image
> Images:

![Text converter](https://www.adobe.com/content/dam/dx-dc/images/acrobat/online/riverflow-items/Convert-to-PDF.svg)
`

export default Previewer;
