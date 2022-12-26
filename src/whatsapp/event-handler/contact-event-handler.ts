/* eslint-disable no-case-declarations */
import WhatsAppBase from '../whatsapp-base.js'

import * as PUPPET from '@juzi/wechaty-puppet'
import { log } from '../../config.js'
import type { Contact } from '@juzi/whatsapp-web.js'

const PRE = 'ContactEventHandler'

export default class ContactEventHandler extends WhatsAppBase {

  public async onContactNameChange (contact: Contact, newName: string, oldName: string) {
    log.info(PRE, `onContactNameChange(${contact.id._serialized}, ${newName}, ${oldName})`)
    this.emit('dirty', {
      payloadType: PUPPET.types.Dirty.Contact,
      payloadId: contact.id._serialized,
    })
  }

}
