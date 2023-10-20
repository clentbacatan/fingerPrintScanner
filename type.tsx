

// interface for the isSensorAvailable method

export interface isSensorAvailableResult {
    available: boolean;
    biometryType?: 'TouchID' | 'FaceID';
    error?: string;
}