# WECHATY PUPPET WHATSAPP

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-whatsapp.svg)](https://badge.fury.io/js/wechaty-puppet-whatsapp)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-whatsapp/next.svg)](https://www.npmjs.com/package/wechaty-puppet-whatsapp?activeTab=versions)
[![NPM](https://github.com/wechaty/wechaty-puppet-whatsapp/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty-puppet-whatsapp/actions?query=workflow%3ANPM)
[![ES Modules](https://img.shields.io/badge/ES-Modules-brightgreen)](https://github.com/Chatie/tsconfig/issues/16)

![wechaty puppet whatsapp](docs/images/wechaty-puppet-whatsapp.png)

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/wechaty/wechaty)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

Puppet Whatsapp

## USAGE

### Puppet Whatsapp

```ts
import { WechatyBuilder }   from '@juzi/wechaty'
import { PuppetWhatsapp } from '@juzi/wechaty-puppet-whatsapp'

const puppet  = new PuppetWhatsapp()
const wechaty = WechatyBuilder.build({ puppet })

wechaty.start()
```

## WECHATY GETTING STARTED

TL;DR:

```sh
export WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

Learn how to run Wechaty bot from <https://github.com/wechaty/wechaty-getting-started>

## HISTORY

### main v1.19

1. Upgrade to Wechaty Puppet v1.19 API
1. Upgrade dependencies

### v1.16 (Apr 6, 2022)

Supported all features from [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js/) by [Issue #19](https://github.com/wechaty/puppet-whatsapp/issues/19).

Thanks for all efforts from the [@juzibot](https://github.com/orgs/wechaty/teams/juzi) team: [@su-chang](https://github.com/su-chang), [@hcfw007](https://github.com/hcfw007), and [@windmemory](https://github.com/windmemory), who has implemented those features to the Wechaty community!

### v1.0 (Oct 30, 2021)

Release 1.0 of Wechaty Puppet Whatsapp.

- v0.5 (Sep 2021) Puppet API v0.51 implemented.
- v0.4 (Sep 2021): ES Modules support

### v0.2 (Feb 11, 2021)

1. Passed the perfect restart unit testing.

### v0.0.1 (Nov, 2020)

Initial version.

1. Kick-off PR from [@univerone](https://github.com/univerone) with ding-dong-bot enabled!

## SPECIAL THANKS

Wechaty Puppet Whatsapp is built on top of [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js), which is A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app, created by Pedro S. Lopez, [@pedroslopez](https://github.com/pedroslopez).

## MAINTAINERS

1. [@univerone](https://wechaty.js.org/contributors/univerone) Shanshan JIANG
1. [@su-chang](https://wechaty.js.org/contributors/su-chang/) Chang SU

## COPYRIGHT & LICENSE

- Code & Docs © 2020-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
