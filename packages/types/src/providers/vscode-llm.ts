import type { ModelInfo } from "../model.js"

export type VscodeLlmModelId = keyof typeof vscodeLlmModels

export const vscodeLlmDefaultModelId: VscodeLlmModelId = "claude-3.5-sonnet"

export const vscodeLlmModels = {
	"gpt-3.5-turbo": {
		contextWindow: 12114,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-3.5-turbo",
		version: "gpt-3.5-turbo-0613",
		name: "GPT 3.5 Turbo",
		supportsToolCalling: true,
		maxInputTokens: 12114,
	},
	"gpt-4o-mini": {
		contextWindow: 12115,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-4o-mini",
		version: "gpt-4o-mini-2024-07-18",
		name: "GPT-4o mini",
		supportsToolCalling: true,
		maxInputTokens: 12115,
	},
	"gpt-4": {
		contextWindow: 28501,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-4",
		version: "gpt-4-0613",
		name: "GPT 4",
		supportsToolCalling: true,
		maxInputTokens: 28501,
	},
	"gpt-4-0125-preview": {
		contextWindow: 63826,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-4-turbo",
		version: "gpt-4-0125-preview",
		name: "GPT 4 Turbo",
		supportsToolCalling: true,
		maxInputTokens: 63826,
	},
	"gpt-4o": {
		contextWindow: 63827,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-4o",
		version: "gpt-4o-2024-11-20",
		name: "GPT-4o",
		supportsToolCalling: true,
		maxInputTokens: 63827,
	},
	o1: {
		contextWindow: 19827,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "o1-ga",
		version: "o1-2024-12-17",
		name: "o1 (Preview)",
		supportsToolCalling: true,
		maxInputTokens: 19827,
	},
	"o3-mini": {
		contextWindow: 63827,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "o3-mini",
		version: "o3-mini-2025-01-31",
		name: "o3-mini",
		supportsToolCalling: true,
		maxInputTokens: 63827,
	},
	"claude-3.5-sonnet": {
		contextWindow: 81638,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "claude-3.5-sonnet",
		version: "claude-3.5-sonnet",
		name: "Claude 3.5 Sonnet",
		supportsToolCalling: true,
		maxInputTokens: 81638,
	},
	"gemini-2.0-flash-001": {
		contextWindow: 127827,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gemini-2.0-flash",
		version: "gemini-2.0-flash-001",
		name: "Gemini 2.0 Flash",
		supportsToolCalling: false,
		maxInputTokens: 127827,
	},
	"gemini-2.5-pro": {
		contextWindow: 63830,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gemini-2.5-pro",
		version: "gemini-2.5-pro-preview-03-25",
		name: "Gemini 2.5 Pro (Preview)",
		supportsToolCalling: true,
		maxInputTokens: 63830,
	},
	"o4-mini": {
		contextWindow: 111446,
		supportsImages: false,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "o4-mini",
		version: "o4-mini-2025-04-16",
		name: "o4-mini (Preview)",
		supportsToolCalling: true,
		maxInputTokens: 111446,
	},
	"gpt-4.1": {
		contextWindow: 111446,
		supportsImages: true,
		supportsPromptCache: false,
		inputPrice: 0,
		outputPrice: 0,
		family: "gpt-4.1",
		version: "gpt-4.1-2025-04-14",
		name: "GPT-4.1 (Preview)",
		supportsToolCalling: true,
		maxInputTokens: 111446,
	},
} as const satisfies Record<
	string,
	ModelInfo & {
		family: string
		version: string
		name: string
		supportsToolCalling: boolean
		maxInputTokens: number
	}
>
