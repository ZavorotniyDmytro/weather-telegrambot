import {Context as ContextTelegraf} from 'telegraf'
export interface Context extends ContextTelegraf{
	session:{
		type?: 'current' | 'location' | 'today' | 'week' | 'air' | 'compare',		
	}
}