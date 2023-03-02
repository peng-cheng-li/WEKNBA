import Queue from 'async-await-queue';
import type { VideoCodec } from './options';
import { Track } from './Track';
export default abstract class LocalTrack extends Track {
    /** @internal */
    sender?: RTCRtpSender;
    /** @internal */
    codec?: VideoCodec;
    protected constraints: MediaTrackConstraints;
    protected reacquireTrack: boolean;
    protected providedByUser: boolean;
    protected muteQueue: Queue;
    /**
     *
     * @param mediaTrack
     * @param kind
     * @param constraints MediaTrackConstraints that are being used when restarting or reacquiring tracks
     * @param userProvidedTrack Signals to the SDK whether or not the mediaTrack should be managed (i.e. released and reacquired) internally by the SDK
     */
    protected constructor(mediaTrack: MediaStreamTrack, kind: Track.Kind, constraints?: MediaTrackConstraints, userProvidedTrack?: boolean);
    get id(): string;
    get dimensions(): Track.Dimensions | undefined;
    private _isUpstreamPaused;
    get isUpstreamPaused(): boolean;
    get isUserProvided(): boolean;
    waitForDimensions(timeout?: number): Promise<Track.Dimensions>;
    /**
     * @returns DeviceID of the device that is currently being used for this track
     */
    getDeviceId(): Promise<string | undefined>;
    mute(): Promise<LocalTrack>;
    unmute(): Promise<LocalTrack>;
    replaceTrack(track: MediaStreamTrack, userProvidedTrack?: boolean): Promise<LocalTrack>;
    protected restart(constraints?: MediaTrackConstraints): Promise<LocalTrack>;
    protected setTrackMuted(muted: boolean): void;
    protected get needsReAcquisition(): boolean;
    protected handleAppVisibilityChanged(): Promise<void>;
    private handleEnded;
    pauseUpstream(): Promise<void>;
    resumeUpstream(): Promise<void>;
    protected abstract monitorSender(): void;
}
//# sourceMappingURL=LocalTrack.d.ts.map