// @generated by protoc-gen-es v1.0.0 with parameter "target=ts,import_extension=.ts"
// @generated from file plugnmeet_recording.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';
import { RecordingTasks } from './plugnmeet_recorder_pb.ts';

/**
 * @generated from message plugnmeet.RecordingReq
 */
export class RecordingReq extends Message<RecordingReq> {
  /**
   * @generated from field: plugnmeet.RecordingTasks task = 1;
   */
  task = RecordingTasks.START_RECORDING;

  /**
   * @generated from field: string sid = 2;
   */
  sid = '';

  /**
   * @generated from field: optional string rtmp_url = 3;
   */
  rtmpUrl?: string;

  /**
   * @generated from field: optional string custom_design = 4;
   */
  customDesign?: string;

  constructor(data?: PartialMessage<RecordingReq>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = 'plugnmeet.RecordingReq';
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'task',
      kind: 'enum',
      T: proto3.getEnumType(RecordingTasks),
    },
    { no: 2, name: 'sid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 3,
      name: 'rtmp_url',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 4,
      name: 'custom_design',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): RecordingReq {
    return new RecordingReq().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): RecordingReq {
    return new RecordingReq().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): RecordingReq {
    return new RecordingReq().fromJsonString(jsonString, options);
  }

  static equals(
    a: RecordingReq | PlainMessage<RecordingReq> | undefined,
    b: RecordingReq | PlainMessage<RecordingReq> | undefined,
  ): boolean {
    return proto3.util.equals(RecordingReq, a, b);
  }
}
