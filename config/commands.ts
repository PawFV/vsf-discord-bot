import { Commands } from '../ts/config'
import { reduce, forEach } from 'lodash'
const config: Commands = {
  '-h': {
    description: 'Lists all available commands.'
  },
  'question-template': {
    description: 'Prints VSF question template',
    output: `Draft your question
The community is here to help you with specific Vue-Storefront problems. 

 Avoid asking opinion-based questions.

1. Summarize the problem  
- Include details about your goal.
- Describe expected and actual results.
- Include any error messages.

2. Describe what you've tried  
- Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.

3. Show some code  
- When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example).`
  }
}

export const getHelp = () => {
  let res = "\n Here's the list of available commands: \n"
  forEach(config, (value, key) => {
    res += `\n\x20\x20 **${key}** : ${value.description}`
  })
  return res
}

export default config
