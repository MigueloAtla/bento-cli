import arg from 'arg'
import inquirer from 'inquirer'
import fs from 'fs'

function parseArgumentsIntoOptions (rawArgs) {
  const args = arg(
    {
      '--imports': String,
      '-i': '--imports'
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    imports: args['--imports'] || null
  }
}

async function promptForMissingOptions (options) {
  const questions = []

  questions.push({
    type: 'list',
    name: 'imports',
    message: 'How are your absolute imports?',
    choices: ['@/components/*', 'components/*'],
    default: 'components/*'
  })

  const answers = await inquirer.prompt(questions)
  return {
    ...options,
    imports: answers.imports
  }
}

export async function cli (args) {
  const styledBentoPath = '.bento'
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)

  let absolute_import = ''

  if (options.imports === '@/components/*') absolute_import = '@'
  else if (options.imports === '@/components/*') absolute_import = ''
  else absolute_import = '../'
  if (fs.existsSync(`${styledBentoPath}/config.js`)) {
    console.log('update file')
    fs.readFile(`${styledBentoPath}/config.js`, 'utf8', (err, data) => {
      if (err) {
        return console.log(err)
      }
      console.log('current config: ', data)
      const replaced = data.replace(
        /{\s*imports:(.*?)\s*}/g,
        `{ imports: '${absolute_import}' }`
      )
      console.log('config changed to: ', replaced)
      fs.writeFileSync(`${styledBentoPath}/config.js`, replaced, err => {
        if (err) return console.log(err)
        console.log('config updated')
      })
    })
  } else {
    console.log('create file')
    fs.mkdir(`${styledBentoPath}`, { recursive: true }, err => {
      if (err) return console.log(err)
      console.log(`${styledBentoPath} created.`)
      fs.writeFile(
        `${styledBentoPath}/config.js`,
        `const config = { imports: '${absolute_import}' }\nmodule.exports = config`,
        { recursive: true },
        error => {
          if (error) console.log(error)
          console.log('config created successfully')
        }
      )
    })
  }
}
