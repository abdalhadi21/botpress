import * as sdk from '@botpress/sdk'
import type * as botpress from '.botpress'

export type Client = botpress.Client

/**
 * @deprecated Use `botpress.IntegrationProps` instead
 */
export type Implementation = botpress.IntegrationProps

export type EventDefinition = Extract<sdk.IntegrationDefinitionProps['events'], {}>['string']
export type ActionDefinition = Extract<sdk.IntegrationDefinitionProps['actions'], {}>['string']
export type ChannelDefinition = Extract<sdk.IntegrationDefinitionProps['channels'], {}>['string']
export type IntegrationCtx = sdk.IntegrationContext<botpress.configuration.Configuration>

export type RegisterFunction = botpress.IntegrationProps['register']
export type UnregisterFunction = botpress.IntegrationProps['unregister']
export type Channels = botpress.IntegrationProps['channels']

type ValueOf<T> = T[keyof T]
export type MessageHandler = ValueOf<ValueOf<Channels>['messages']>
export type MessageHandlerProps = Parameters<MessageHandler>[0]
export type AckFunction = MessageHandlerProps['ack']
