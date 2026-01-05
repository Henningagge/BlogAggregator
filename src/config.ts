import fs from 'fs';
import os from 'os';
import path from 'path';

export type Config = {
  dbUrl: string;
  currentUserName: string;
};

export function setUser(username: string): Config {}

export function readConfig() {}

function getConfigFilePath(): string {}
function writeConfig(cfg: Config): void {}
function validateConfig(rawConfig: any): Config {}
