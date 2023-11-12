import { PostgrestError } from '@supabase/supabase-js'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      alergia: {
        Row: {
          id: string
          nombre: string
        }
        Insert: {
          id?: string
          nombre: string
        }
        Update: {
          id?: string
          nombre?: string
        }
        Relationships: []
      }
      cita: {
        Row: {
          date: string
          id: string
          nombre: string
          notas: string
          pacienteId: string
          tipo: Database["public"]["Enums"]["CitasTipo"]
        }
        Insert: {
          date: string
          id?: string
          nombre: string
          notas: string
          pacienteId: string
          tipo?: Database["public"]["Enums"]["CitasTipo"]
        }
        Update: {
          date?: string
          id?: string
          nombre?: string
          notas?: string
          pacienteId?: string
          tipo?: Database["public"]["Enums"]["CitasTipo"]
        }
        Relationships: [
          {
            foreignKeyName: "cita_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          }
        ]
      }
      contactoEmergencia: {
        Row: {
          correo: string
          createdAt: string
          id: string
          nombre: string
          pacienteId: string
          parentesco: string
          telefono: string
          updatedAt: string
        }
        Insert: {
          correo: string
          createdAt?: string
          id?: string
          nombre: string
          pacienteId: string
          parentesco: string
          telefono: string
          updatedAt?: string
        }
        Update: {
          correo?: string
          createdAt?: string
          id?: string
          nombre?: string
          pacienteId?: string
          parentesco?: string
          telefono?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "contactoEmergencia_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          }
        ]
      }
      paciente: {
        Row: {
          antecedentes: string | null
          correo: string | null
          createdAt: string
          direccion: string | null
          fecha_nacimient: string
          genero: Database["public"]["Enums"]["Genero"]
          id: string
          medicamentos: string | null
          nombre: string
          telefono: string
          updatedAt: string
        }
        Insert: {
          antecedentes?: string | null
          correo?: string | null
          createdAt?: string
          direccion?: string | null
          fecha_nacimient: string
          genero?: Database["public"]["Enums"]["Genero"]
          id?: string
          medicamentos?: string | null
          nombre: string
          telefono: string
          updatedAt?: string
        }
        Update: {
          antecedentes?: string | null
          correo?: string | null
          createdAt?: string
          direccion?: string | null
          fecha_nacimient?: string
          genero?: Database["public"]["Enums"]["Genero"]
          id?: string
          medicamentos?: string | null
          nombre?: string
          telefono?: string
          updatedAt?: string
        }
        Relationships: []
      }
      pacienteAlergia: {
        Row: {
          alergiaid: string
          id: string
          pacienteId: string
        }
        Insert: {
          alergiaid: string
          id?: string
          pacienteId: string
        }
        Update: {
          alergiaid?: string
          id?: string
          pacienteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "pacienteAlergia_alergiaid_fkey"
            columns: ["alergiaid"]
            isOneToOne: false
            referencedRelation: "alergia"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pacienteAlergia_pacienteId_fkey"
            columns: ["pacienteId"]
            isOneToOne: false
            referencedRelation: "paciente"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          avatar: string | null
          email: string
          fullname: string | null
          id: string
        }
        Insert: {
          avatar?: string | null
          email: string
          fullname?: string | null
          id?: string
        }
        Update: {
          avatar?: string | null
          email?: string
          fullname?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      CitasTipo: "PRIMERA_CITA" | "OPERACION" | "PAP" | "RUTINA"
      Genero: "MUJER" | "Hombre" | "MUJER_TRANS" | "HOMBRE_TRANS" | "NO_BINARIA"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]




export type DbResult<T> = T extends PromiseLike<infer U> ? U : never
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
export type DbResultErr = PostgrestError