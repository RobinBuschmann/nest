import { Transport } from '../enums/transport.enum';
import { CustomTransportStrategy } from './custom-transport-strategy.interface';
import { IClientOptions } from 'mqtt';
import { ServerCredentials } from 'grpc';
import { Server } from './../server/server';
export declare type MicroserviceOptions = GrpcOptions | TcpOptions | RedisOptions | NatsOptions | MqttOptions | CustomStrategy;
export interface CustomStrategy {
    strategy: Server & CustomTransportStrategy;
    options?: {};
}
export interface GrpcOptions {
    transport?: Transport.GRPC;
    options: {
        url?: string;
        credentials?: ServerCredentials;
        protoPath: string;
        package: string;
    };
}
export interface TcpOptions {
    transport?: Transport.TCP;
    options?: {
        host?: string;
        port?: number;
        retryAttempts?: number;
        retryDelay?: number;
    };
}
export interface RedisOptions {
    transport?: Transport.REDIS;
    options?: {
        url?: string;
        retryAttempts?: number;
        retryDelay?: number;
    };
}
export interface MqttOptions {
    transport?: Transport.MQTT;
    options?: IClientOptions & {
        url?: string;
    };
}
export interface NatsOptions {
    transport?: Transport.NATS;
    options?: {
        url?: string;
        name?: string;
        pass?: string;
        maxReconnectAttempts?: number;
        reconnectTimeWait?: number;
        servers?: string[];
        tls?: any;
    };
}
