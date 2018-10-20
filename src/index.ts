export interface IAddStreamResult {}

export interface IMessage {}

export interface IStream {}

export interface IBlob {}

export interface IPublishMessageResult {}

export interface IPublishBlobResult {}

export interface ILibPeer {
  addStream(source: string, pubkey: string): Promise<IAddStreamResult>;
  getStream(pubkey: string, since?: string): Promise<IStream>;
  getBlob(contentHash: string): Promise<IBlob>;
  publishMessage(message: IMessage): Promise<IPublishMessageResult>;
  publishBlob(): Promise<IPublishMessageResult>;
}
