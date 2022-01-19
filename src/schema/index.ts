import WAWebJS from 'whatsapp-web.js'
export const WhatsWebURL = WAWebJS.WhatsWebURL
export const DefaultOptions = WAWebJS.DefaultOptions
export const MessageType = WAWebJS.MessageTypes
export const GroupNotificationType = WAWebJS.GroupNotificationTypes
export {
  MessageMedia
} from 'whatsapp-web.js'
export type {
  Client,
  ClientInfo,
  ClientInfoPhone,
  ClientOptions,
  ClientSession,
  BatteryInfo,
  CreateGroupResult,
  GroupNotification,
  ChatTypes,
  Events,
  GroupNotificationTypes,
  MessageAck,
  MessageTypes,
  Status,
  WAState,
  MessageInfo,
  InviteV4Data,
  Message,
  MessageId,
  Location,
  Label,
  MessageSendOptions,
  MediaFromURLOptions,
  // MessageMedia,
  MessageContent,
  Contact,
  ContactId,
  BusinessContact,
  PrivateContact,
  Chat,
  MessageSearchOptions,
  ChatId,
  PrivateChat,
  GroupParticipant,
  ChangeParticipantsPermisions,
  ChangeGroupParticipants,
  GroupChat,
  ProductMetadata,
  Product,
  Order,
  Payment,
  Call,
  Buttons,
  Row,
  List,
} from 'whatsapp-web.js'

export * from './event-name.js'

export default WAWebJS
