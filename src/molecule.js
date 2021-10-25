import arg from 'arg'
import inquirer from 'inquirer'
import { generateMolecule } from './main-molecule'
import fs from 'fs'

function parseArgumentsIntoOptions (rawArgs) {
  const args = arg(
    {
      '--name': String,
      '--storybook': Boolean,
      '-n': '--name',
      '-s': '--storybook'
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    name: args['--name'] || null,
    storybook: args['--storybook'] || false
  }
}

async function promptForMissingOptions (options) {
  const questions = []

  const getDirectories = source =>
    fs
      .readdirSync(source, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

  const atoms = getDirectories('./components/atoms')

  if (!options.name) {
    questions.push({
      name: 'name',
      message: 'Name of the molecule',
      default: null
    })
  }

  questions.push({
    type: 'list',
    name: 'type',
    message: 'Layout type:',
    choices: ['Box', 'Flex', 'Row', 'Column', 'AutoColumns', 'Bento'],
    default: 'Box'
  })

  questions.push({
    type: 'checkbox',
    name: 'atoms',
    message: 'Which atoms do you want to use:',
    choices: atoms,
    default: 'Box'
  })

  const answers = await inquirer.prompt(questions)
  return {
    ...options,
    name: answers.name || options.name,
    type: answers.type,
    atoms: answers.atoms,
    storybook: options.storybook
  }
}

export async function cli (args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  await generateMolecule(options)
}
