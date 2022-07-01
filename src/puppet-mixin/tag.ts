import * as PUPPET from '@juzi/wechaty-puppet'
import { log } from '../config.js'

const PRE = 'MIXIN_TAG'

export async function tagContactAdd (
  tagId: string,
  contactId: string,
): Promise<void> {
  log.verbose(PRE, 'tagContactAdd(%s)', tagId, contactId)
  return PUPPET.throwUnsupportedError()
}

export async function tagContactRemove (
  tagId: string,
  contactId: string,
): Promise<void> {
  log.verbose(PRE, 'tagContactRemove(%s)', tagId, contactId)
  return PUPPET.throwUnsupportedError()
}

export async function tagContactDelete (
  tagId: string,
): Promise<void> {
  log.verbose(PRE, 'tagContactDelete(%s)', tagId)
  return PUPPET.throwUnsupportedError()
}

export async function tagContactList (
  contactId?: string,
): Promise<string[]> {
  log.verbose(PRE, 'tagContactList(%s)', contactId)
  return PUPPET.throwUnsupportedError()
}
